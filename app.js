/*
 * Lógica del portal de estudiantes para gestionar el inicio de sesión con Supabase.
 *
 * Sustituye las constantes SUPABASE_URL y SUPABASE_KEY con los valores de tu
 * proyecto Supabase. Estos valores se encuentran en el panel de Supabase
 * (Configuración → API). Recuerda que la clave pública (anon key) debe usarse
 * únicamente en el frontend.
 */

const SUPABASE_URL = 'https://REEMPLAZA_POR_TU_PROYECTO.supabase.co';
const SUPABASE_KEY = 'REEMPLAZA_POR_TU_SUPABASE_ANON_KEY';

// Crear cliente Supabase utilizando la biblioteca cargada en index.html. Esta
// variable global `supabase` está disponible porque se ha cargado la versión
// UMD de supabase-js.
const supa = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Manejar el envío del formulario de login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const messageEl = document.getElementById('message');
  messageEl.textContent = '';
  messageEl.style.color = '#e74c3c';

  // Validar campos básicos
  if (!email || !password) {
    messageEl.textContent = 'Por favor, ingresa correo y contraseña.';
    return;
  }

  try {
    const { user, session, error } = await supa.auth.signIn({ email, password });
    if (error) {
      messageEl.textContent = error.message;
      return;
    }
    // Éxito: actualizar mensaje y preparar redirección
    messageEl.style.color = '#27ae60';
    messageEl.textContent = 'Inicio de sesión exitoso. Redirigiendo...';
    // Aquí podrías redireccionar a una página de dashboard cuando exista
    // window.location.href = 'dashboard.html';
    console.log('Usuario autenticado:', user);
  } catch (err) {
    messageEl.textContent = 'Ocurrió un error al iniciar sesión.';
  }
});
