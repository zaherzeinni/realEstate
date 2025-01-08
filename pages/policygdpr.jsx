import React from 'react'
import { useLanguageContext } from "@/context/languageContext";
import Header2 from "../components/components/header/Header2"
import Header3 from "../components/components/header/Header3"

export default function Policygdpr() {


  const { language} = useLanguageContext();

  return (
    <div dir='ltr' >
  <Header3 />
<div className="WordSection1 px-12 mt-20">

<p className="MsoNormal">&nbsp;</p>

<p className="MsoNormal">&nbsp;</p>

<p
      className="MsoNormal"
      style={{
        textAlign: 'center',
      }}
    >
      <a name="_943qra85v4ie"></a>
      <b>
        <span
          style={{
            fontSize: '30pt',
            fontFamily: '"Calibri",sans-serif',
            color: '#92D050',
            
          }}
        >
         {language === "en" ?  "GDPR COMPLIANCE NOTICE" : "AVIS DE CONFORMITÉ AU RGPD" }
        </span>
      </b>
    </p>



      <p
        className="MsoNormal"
        style={{
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          &nbsp;
        </span>
      </p>

      <p
        className="MsoNormal"
        style={{
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          &nbsp;
        </span>
      </p>

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
       {language === "en" ? <p>In accordance with the General Data Protection Regulation (GDPR) of the European Union and our commitment to protecting your privacy, <b>Sand n Sea Realty</b> (the "Company") collects and processes personal data responsibly and transparently.</p>
: <p>Conformément au Règlement Général sur la Protection des Données (RGPD) de l'Union Européenne et à notre engagement à protéger votre vie privée, <b>Sand n Sea Realty</b> (la "Société") collecte et traite les données personnelles de manière responsable et transparente.</p>}
        </span>
      </p>



      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          &nbsp;
        </span>
      </p>

     

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          &nbsp;
        </span>
      </p>

      <h3 className="MsoNormal">
      {language === "en" ? "DATA COLLECTION AND PROCESSING":"COLLECTE ET TRAITEMENT DES DONNÉES"}
      </h3>

      {/* <h4 className="MsoNormal  font-semibold">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ? "TYPES OF DATA COLLECTED" : "TYPES DE DONNÉES COLLECTÉES"}
        </span>
      </h4> */}

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          &nbsp;
        </span>
      </p>



{/* <h5 className="MsoNormal font-semibold">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
        {language === "en" ? "PERSONAL DATA":"DONNÉES PERSONNELLES"}
        </span>
      </h5>

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          &nbsp;
        </span>
      </p> */}

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
         {language === "en" ? "The Company may collect and process personal data, including but not limited to names, email addresses, and phone numbers, to facilitate communication, provide services, and fulfill legal obligations. This data may be collected directly from individuals or through automated means such as cookies and other technologies." : "La Société peut collecter et traiter des données personnelles, y compris, mais sans s'y limiter, les noms, adresses e-mail et numéros de téléphone, pour faciliter la communication, fournir des services et respecter les obligations légales. Ces données peuvent être collectées directement auprès des individus ou par des moyens automatisés tels que les cookies et d'autres technologies."}
        </span>
      </p>

<h3 className="MsoNormal font-semibold mt-4">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
        {language === "en" ? "PURPOSE OF DATA PROCESSING":"OBJECTIF DU TRAITEMENT DES DONNÉES"}
        </span>
      </h3>


      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          
        </span>
        <ul className=' mb-5 '
          style={{
            fontFamily: '"Calibri",sans-serif',
           
          }}
        >
          <li className='ml-1'> {language === "en" ? "Personal data is processed for specific purposes, including:":"Les données personnelles sont traitées à des fins spécifiques, notamment :"}</li>
          <li>{language === "en" ? "•	Improving the functionality and usability of our website and services.": 	"•	Améliorer la fonctionnalité et l'utilisabilité de notre site web et de nos services."}</li>
          <li>{language === "en" ? "•	Contacting individuals who have expressed interest in our goods and services.": 	"•	Contacter les personnes ayant exprimé un intérêt pour nos biens et services."}</li>
          <li>{language === "en" ? "•	Completing transactions for goods and services.": 	"•	Compléter les transactions de biens et services."}</li>
          <li>{language === "en" ? "•	Compliance with legal requirements and responding to government requests.": 	"•	Respecter les exigences légales et répondre aux demandes des autorités gouvernementales."}</li>
          <li>{language === "en" ? "•	Protecting the security and well-being of the Company and others.": 	"•	Protéger la sécurité et le bien-être de la Société et des autres."}</li>

        </ul>
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          
        </span>
      </p>

      <h3 className="MsoNormal  font-semibold">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ? "DATA SECURITY MEASURES":"MESURES DE SÉCURITÉ DES DONNÉES"}


        </span>
      </h3>

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?
          "The Company implements commercially acceptable security measures to protect personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic data storage or transmission over the Internet is entirely secure, and the Company cannot guarantee absolute security.":"La Société met en œuvre des mesures de sécurité commercialement acceptables pour protéger les données personnelles contre tout accès, divulgation, altération ou destruction non autorisés. Cependant, aucune méthode de stockage ou de transmission électronique de données sur Internet n'est entièrement sécurisée, et la Société ne peut garantir une sécurité absolue."}


</span>
</p>

<h3 className="MsoNormal  font-semibold mt-3">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?  "GDPR COMPLIANCE AND YOUR RIGHTS":"CONFORMITÉ AU RGPD ET VOS DROITS"}


        </span>
      </h3>

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
 {language === "en" ?
"Under the GDPR, individuals have certain rights regarding their personal data, including the right to:":"UEn vertu du RGPD, les individus ont certains droits concernant leurs données personnelles, y compris le droit de :"}


</span>
</p>




<p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          
        </span>
        <ul className=' mb-5 '
          style={{
            fontFamily: '"Calibri",sans-serif',
           
          }}
        >
          <li className='ml-1'> {language === "en" ? "•	Access their personal data and request information about its processing.":"•	Accéder à leurs données personnelles et demander des informations sur leur traitement."}</li>
          <li>{language === "en" ? "•	Rectify inaccurate or incomplete personal data.": 	"•	Rectifier des données personnelles inexactes ou incomplètes."}</li>
          <li>{language === "en" ? "•	Object to the processing of personal data under certain circumstances.": 	"•	S'opposer au traitement de données personnelles dans certaines circonstances."}</li>
          <li>{language === "en" ? "•	Request the erasure of personal data, subject to legal obligations.": 	"•	Demander l'effacement de données personnelles, sous réserve d'obligations légales."}</li>
          <li>{language === "en" ? "•	Restrict the processing of personal data under certain circumstances.": 	"•	Restreindre le traitement des données personnelles dans certaines circonstances."}</li>
          <li>{language === "en" ? "•	Data portability, allowing individuals to obtain and reuse their personal data for their purposes.": 	"•	La portabilité des données, permettant aux individus d'obtenir et de réutiliser leurs données personnelles à leurs fins."}</li>
          <li>{language === "en" ? "•	Withdraw consent for the processing of personal data at any time, where consent is the legal basis for processing.": 	"•	Retirer leur consentement au traitement des données personnelles à tout moment, lorsque le consentement est la base légale du traitement."}</li>

        </ul>
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          
        </span>
      </p>



<h3 className="MsoNormal  font-semibold mt-3">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
           {language === "en" ?
          "YOUR CONSENT AND ACCEPTANCE":"VOTRE CONSENTEMENT ET ACCEPTATION"}


        </span>
      </h3>

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?
"By using our website and services, you consent to the collection and processing of your personal data in accordance with this GDPR Compliance Notice and our Privacy Policy. If you do not agree with the terms outlined herein, please refrain from using our website and services.":"En utilisant notre site web et nos services, vous consentez à la collecte et au traitement de vos données personnelles conformément à cet Avis de Conformité au RGPD et à notre Politique de Confidentialité. Si vous n'êtes pas d'accord avec les termes énoncés ici, veuillez-vous abstenir d'utiliser notre site web et nos services."}


</span>
</p>


{/* <h5 className="MsoNormal  font-semibold mt-3">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?
          "THIRD-PARTY WEB BEACONS":"BALISES WEB TIERCES"}


        </span>
      </h5>

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?
"To better understand where users travel and what they do while using the site, we use web beacons from Google that are provided by third parties. In order to enhance its services and products and to show you advertisements for products and services that interest you, Google may also utilize anonymous information about your visits to the site.":"Pour mieux comprendre où les utilisateurs se déplacent et ce qu'ils font tout en utilisant le site, nous utilisons des balises web de Google fournies par des tiers. Afin d'améliorer ses services et produits et de vous montrer des publicités pour des produits et services qui vous intéressent, Google peut également utiliser des informations anonymes sur vos visites sur le site."}


</span>
</p> */}



<h3 className="MsoNormal  font-semibold mt-3">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?
          "GOOGLE ANALYTICS":"GOOGLE ANALYTICS"}


        </span>
      </h3>

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?
"Included across the board of the website to monitor and collect data on the behavior of our clients and customers. Additionally, it is utilized to monitor bounce, conversion, and submission rates.":"Inclus dans l'ensemble du site web pour surveiller et collecter des données sur le comportement de nos clients et consommateurs. De plus, il est utilisé pour surveiller les taux de rebond, de conversion et de soumission."}


</span>
</p>
<h3 className="MsoNormal  font-semibold mt-3">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?
          "HOW WE USE YOUR INFORMATION":"COMMENT NOUS UTILISONS VOS INFORMATIONS"}


        </span>
      </h3>

      <p className="MsoNormal">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?
"The data we gather is used to enhance the site, get in touch with people who have expressed an interest in learning more about our goods and services, and, if necessary, complete transactions for goods and services. If you have given us your email address or postal address, we will only use those to contact you with updates, offers, or product information.":"Les données que nous recueillons sont utilisées pour améliorer le site, contacter les personnes qui ont exprimé un intérêt à en savoir plus sur nos produits et services et, le cas échéant, finaliser les transactions pour les biens et services. Si vous nous avez donné votre adresse e-mail ou votre adresse postale, nous ne les utiliserons que pour vous contacter avec des mises à jour, des offres ou des informations sur des produits."}


</span>
</p>











<h3 className="MsoNormal  font-semibold mt-3">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
           {language === "en" ?
         "CONTACT US":"CONTACTEZ-NOUS"}


        </span>
      </h3>

      <p className="MsoNormal">
      {language === "en" ?
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          
If you have any questions, concerns, or requests regarding the processing of your personal data or this GDPR Compliance Notice, please contact us at <a href="mailto:hello@sandnsearealty.ca" >hello@sandnsearealty.ca</a>


</span> :
        <span
        style={{
          fontFamily: '"Calibri",sans-serif',
        }}
      >
        
        Si vous avez des questions, des préoccupations ou des demandes concernant le traitement de vos données personnelles ou cet avis de conformité au RGPD, veuillez nous contacter à  <a href="mailto:hello@sandnsearealty.ca" >hello@sandnsearealty.ca</a>


</span>
        }
</p>

<div className="MsoNormal text-lg font-semibold mt-3">
        <span
          style={{
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          {language === "en" ?
            <span>Read Our: <a href='/terms'>Terms & Conditions</a></span>:<span>Lisez notre : <a href='/terms'>Conditions Générales</a></span>}
</span>
<div className="MsoNormal  text-lg font-semibold mb-10" > <span style={{
            fontFamily: '"Calibri",sans-serif',
          }} >
            
            {language === "en" ?
            <span>Read Our: <a href='/privacy'>Privacy Policy</a></span>:<span>Lisez notre : <a href='/privacy'>Politique de Confidentialité</a></span>}
          </span>
          </div>
      </div>












</div>
</div>



  )
}
