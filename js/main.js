// Sample data and small interactive features
const books = [
  {title:'Sekolah Adiwiyata', author:'Drs. endang haris, Drs. H. Abas & Yedi wardiana,M.Pd', year:2018, topics:['kurikulum berbasis lingkungan,','non fiksi']},
  {title:'Panduan Pendidikan Anti Korupsi', author:'Ranti Febriani, Eliya Sevawati', year:2021, topics:['non Fiksi','Pengetahuan']},
  {title:'Para Pencari Keadilan', author:'Pipiet Senja', year:2015, topics:['fiksi','sosial']},
  {title:'Kerja terbaik', author:'cut dian tarakavita', year:2011, topics:['non fiksi','cerita']},
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
