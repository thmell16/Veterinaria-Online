const SUPABASE_URL = "https://yfvomuqdvaiefctmrjut.supabase.co";
const SUPABASE_KEY = "sb_publishable_9XjfzC3Vv2cW-QZyqXDgZA_HQNTR4Nm";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// 🔴 CERRAR SESIÓN BIEN HECHO
window.cerrarSesion = async function () {
  const { error } = await window.supabaseClient.auth.signOut();

  if (error) {
    console.error(error);
    alert("No se pudo cerrar sesión");
    return;
  }

  // Esto borra la sesión guardada
  window.location.replace("login.html");
};



