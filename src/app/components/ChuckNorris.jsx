import { useState, useEffect } from "react";

function ChuckNorris({ token, onLogout }) {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const fetchFact = () => {
  //   setLoading(true);
  //   setError("");
  //   // TODO (Carter): fetch("/facts", { headers: { Authorization: `Bearer ${token}` } })
  //   //   .then(res => res.json())
  //   //   .then(data => { setFact(data.fact); setLoading(false); })
  //   //   .catch(() => { setError("Failed to load fact."); setLoading(false); });
  // };

  // placeholder
  const fetchFact = () => {
    setLoading(false);
    setFact("Chuck Norris can divide by zero.");
  };

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
              <p style={styles.muted}>Loading...</p>
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
