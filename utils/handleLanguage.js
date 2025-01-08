import { useLanguageContext } from "@/context/languageContext";

export   const handleChange = (country) => {
    
     const {language} = useLanguageContext()
 
     switch (country) {
       case "Mexico":
         return "Mexique"; // Set ID for Mexico
         break;
       case "North Cyprus":
         return "Chypre du Nord"; // Set ID for North Cyprus
         break;
       case "Spain":
        return "Espagne"; // Set ID for Spain
         break;

       case "Rep.Dominicaine":
         return "RÉP. DOMINICAINE"; // Set ID for Dominican Republic
         break;
         
      //  case "Republic Dominica":
      //    return "Dominican Republic"; // Set ID for Dominican Republic
      //    break;

          //correct
         case "Republic Dominica":
          switch (language) {
              case "fr":
                  return "République Dominicaine"; // French
              case "en":
              default:
                  return "Dominican Republic"; // English
          }
          break;

          // case "Rep.Dominicaine":
          //   switch (language) {
          //       case "fr":
          //           return "République Dominicaine"; // French
          //       case "en":
          //       default:
          //           return "Dominican Republic"; // English
          //   }
          //   break;



  
          

       case "Portugal":
         return "Portugal"; // Set ID for Portugal
         break;
       case "Canada":
         return "Canada"; // Set ID for Canada
         break;
       case "United Arab Emirates":
         return "Émirats Arabes Unis"; // Set ID for UAE
         break;
       case "U.A.E.":
         return "E.A.U."; // Set ID for UAE
         break;
       default:
         return ""; // Default case for "All countries"
     }
 
     
   };