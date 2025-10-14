fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('feed');

    // 최신 날짜 기준 내림차순 정렬
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `
        <img src="${post.image}" alt="">
        <p class="post-date">${post.date}</p>
        <p>${post.desc}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('게시물 불러오기 오류:', err));