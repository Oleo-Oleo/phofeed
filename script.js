fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('feed');

    // 날짜 기준 내림차순 정렬 (최근 게시물이 위)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `
        <img src="${post.image}" alt="">
        <p>${post.desc}</p>
        <p class="post-date">${post.date}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error('게시물 불러오기 오류:', err);
  });