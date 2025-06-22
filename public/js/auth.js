firebase.auth().onAuthStateChanged(async (user) => {
  if (!user) return window.location.href = "/login.html";
  const token = await user.getIdTokenResult();
  if (!token.claims.paid) window.location.href = "/subscribe.html";
});