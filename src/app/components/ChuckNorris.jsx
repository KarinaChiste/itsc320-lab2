import { useState, useEffect } from "react";

function ChuckNorris({ token, onLogout }) {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFact = () => {
    setLoading(true);
    setError("");
    console.log(token);
    fetch("http://localhost:3333/fact", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => { setFact(data.fact); setLoading(false); })
      .catch(() => { setError("Failed to load fact."); setLoading(false); });
  };

  // placeholder
  // const fetchFact = () => {
  //   setLoading(false);
  //   setFact("Chuck Norris can divide by zero.");
  // };

  useEffect(() => {
    fetchFact();
  }, [token]);

  return (
    <div style={styles.page}>

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>Chuck Norris Facts</h1>
        {onLogout && (
          <button style={styles.logoutButton} onClick={onLogout}>
            Log Out
          </button>
        )}
      </header>

      {/* Card */}
      <main style={styles.main}>
        <div style={styles.card}>
          <p style={styles.label}>Today's Fact</p>

          <div style={styles.factBox}>
            {loading ? (
              <div role="status">
                {/* spinner from: https://flowbite.com/docs/components/spinner/ */}
                <svg aria-hidden="true" className="w-8 h-8 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
              
            ) : error ? (
              <p style={styles.error}>{error}</p>
            ) : (
              <p style={styles.fact}>{fact}</p>
            )}
          </div>

          <button
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
            onClick={fetchFact}
            disabled={loading}
          >
            Next Fact
          </button>
        </div>
      </main>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 32px",
    backgroundColor: "#1f2937",
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "700",
    color: "#ffffff",
  },
  logoutButton: {
    background: "transparent",
    border: "1px solid #6b7280",
    color: "#d1d5db",
    fontSize: "13px",
    padding: "6px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 16px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    padding: "36px 32px",
    width: "100%",
    maxWidth: "560px",
  },
  label: {
    margin: "0 0 12px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#6b7280",
  },
  factBox: {
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
    padding: "24px",
    marginBottom: "24px",
    minHeight: "100px",
    display: "flex",
    alignItems: "center",
  },
  fact: {
    margin: 0,
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#111827",
  },
  muted: {
    margin: 0,
    fontSize: "14px",
    color: "#9ca3af",
  },
  error: {
    margin: 0,
    fontSize: "14px",
    color: "#ef4444",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1f2937",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },
  buttonDisabled: {
    opacity: 0.45,
    cursor: "not-allowed",
  },
};

export default ChuckNorris;
