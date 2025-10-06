// Sample data and small interactive features
const books = [
  {title:'Ensiklopedia Anak', author:'Tim Ilmu', year:2019, topics:['ensiklopedia','pengetahuan']},
  {title:'Matematika SMP Kelas 8', author:'Budi Santoso', year:2021, topics:['matematika','pelajaran']},
  {title:'Sejarah Indonesia Ringkas', author:'Ani Wijaya', year:2018, topics:['sejarah','sosial']},
  {title:'Cerita Rakyat Jawa Barat', author:'Dewi', year:2016, topics:['cerita','kebudayaan']},
];

function renderBooks(filter=''){
  const cont = document.getElementById('books');
  cont.innerHTML = '';
  const q = filter.trim().toLowerCase();
  const list = books.filter(b => {
    return !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.topics.join(' ').includes(q);
  });
  if(list.length === 0){
    cont.innerHTML = '<p class="muted">Tidak ada hasil. Coba kata kunci lain.</p>';
    return;
  }
  list.forEach(b => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h4>${b.title}</h4>
      <p class="meta">Pengarang: ${b.author} · Tahun: ${b.year}</p>
      <p>Topik: ${b.topics.join(', ')}</p>`;
    cont.appendChild(card);
  });
}

document.getElementById('search').addEventListener('input', e => renderBooks(e.target.value));
window.addEventListener('load', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderBooks();
});
