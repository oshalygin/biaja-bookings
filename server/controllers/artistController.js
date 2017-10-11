import artistService from '../services/artistService';

export async function get(request, response) {
  const artists = await artistService.getArtists();
  return response.status(200).json(artists);
}

export async function post(request, response) {
  await artistService.hydrateArtists();
  return response.status(200).json({});
}

const artistController = {
  get,
  post,
};

export default artistController;
