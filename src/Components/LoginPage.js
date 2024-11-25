// import React from "react";
// import "./LoginPage.css"; // Create a CSS file for custom styling

// const QuoteForm = () => {
//   return (
//     <div className="background">
//         <div className="background_text">
//             <h3>SAVOURING MOMENTS TOGETHER</h3>
//             <h2>Elevating Events with Excellence</h2>
//             <p>Crafting memorable through impeccable service, exqusite</p>
//         </div>
//      <div className="quote-form-container">
//       <h2 className="quote-form-heading">Get Your Quote</h2>
//       <form className="quote-form">
//         <div className="form-row">
//           <input
//             type="text"
//             placeholder="Name"
//             className="form-input"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Number"
//             className="form-input"
//             required
//           />
//         </div>
//         <input
//           type="email"
//           placeholder="Email id"
//           className="form-input"
//           required
//         />
//         <select className="form-input" required>
//           <option value="">-- Select your services --</option>
//           <option value="service1">Service 1</option>
//           <option value="service2">Service 2</option>
//           <option value="service3">Service 3</option>
//         </select>
//         <textarea
//           placeholder="Message"
//           className="form-input"
//           rows="4"
//         ></textarea>
//         <input type="date" className="form-input" required />
//         <button type="submit" className="form-button">
//           Submit Now ➔
//         </button>
//       </form>
//         </div>
//     </div>

//   );
// };

// export default QuoteForm;

import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <section className="login-page">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="btn-login">Login</button>
      </form>
    </section>
  );
};

export default LoginPage;
