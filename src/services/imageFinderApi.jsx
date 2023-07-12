const BASE_URL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
const KEY = '37014373-51d1c962a9905aff05771b673';

export default async function findImages(searchQuery, page) {
  const response = await fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return await response.json();
}
