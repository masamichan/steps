const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">{`${step >= 1 ? "active" : ""}`}</div>
        <div className="active">{`${step >= 2 ? "active" : ""}`}</div>
        <div className="active">{`${step >= 3 ? "active" : ""}`}</div>
      </div>
      <p className="message">
        step {step}:{messages[step]}
      </p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  );
}
