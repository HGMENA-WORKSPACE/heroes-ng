export const config = {
  /**
   * Version de la aplicacion
   */
  version: '00.00.01',

  /**
   * Titulo de la aplicacion
   */
  TITLE: '',

  /**
   * Idiomas
   */
  LANGUAJES: {
    'es-ES': 'es'
  },

  /**
   * Rutas de navegacion
   */
  ENDPOINTS: {
    all: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json',
    get: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/{id}.json',
  },
};
