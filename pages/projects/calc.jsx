import { useState } from "react";
import SelectComponent from "../../components/Site/SelectComponent";
import { useLanguageContext } from "@/context/languageContext";

const Calc = ({ price }) => {
  const [loanAmount, setLoanAmount] = useState("");
  // const [loanAmount, setLoanAmount] = useState(price);
  const [interestRate, setInterestRate] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState("");
  const [additionalCost, setAdditionalCost] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [error, setError] = useState("");

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = (parseFloat(loanTermYears) * 12) + parseFloat(loanTermMonths);
    const additional = parseFloat(additionalCost);

    if (principal && monthlyInterestRate && numberOfPayments) {
      const monthly =
        (principal * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) +
        additional;

      setMonthlyPayment(monthly.toFixed(2));
    } else {
      setMonthlyPayment(null);
    }

    // Validate inputs
    if (
      isNaN(principal) ||
      isNaN(monthlyInterestRate) ||
      isNaN(numberOfPayments)
    ) {
      setError(message);
      setMonthlyPayment(null);
      return;
    }

    setError(""); // Clear any previous error
  };


  const {language} = useLanguageContext();
  const message = () => {
    if (language === "en" ) {
      return ("Please enter valid numbers for all fields.")
    } else {
      return ("Veuillez saisir des numéros valides pour tous les champs.")
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4 !mt-5">
      <h5 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {language === "en" ? "Mortgage Calculator" : "Calculateur hypothécaire"}
      </h5>
      
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            {language === "en" ? "Loan Amount ($,€,£)" : "Montant du prêt ($,€,£)"}
          </label>
          <input
            type="number"
            min="0"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-3 py-2 border border-primary2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            {language === "en" ? "Down payment ($,€,£)" : "Acompte ($,€,£)"}
          </label>
          <input
            type="number"
            min="0"
            value={additionalCost}
            onChange={(e) => setAdditionalCost(e.target.value)}
            className="w-full px-3 py-2 border border-primary2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            {language === "en" ? "Interest Rate (%)" : "Taux d'intérêt (%)"}
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-3 py-2 border border-primary2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            {language === "en" ? "Loan Term (Years)" : "Durée du prêt (années)"}
          </label>
          <input
            type="number"
            min="0"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            className="w-full px-3 py-2 border border-primary2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            {language === "en" ? "Loan Term (Months)" : "Durée du prêt (mois)"}
          </label>
          <input
            type="number"
            min="0"
            value={loanTermMonths}
            onChange={(e) => setLoanTermMonths(e.target.value)}
            className="w-full px-3 py-2 border border-primary2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2"
          />
        </div>

        <button 
          className="primary-btn1 h-10"
          onClick={calculateMonthlyPayment}
        >
          {language === "en" ? "Calculate" : "Calculer"}
        </button>

        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {monthlyPayment && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">
              {language === "en" ? "Loan Amount: " : "Montant du prêt: "}
              <span className="font-semibold">${loanAmount-additionalCost}</span>
            </div>
            <div className="text-lg text-gray-800 font-semibold">
              {language === "en" ? "Monthly Payment: " : "Paiement mensuel: "}
              <span className="text-primary2">${monthlyPayment}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calc;