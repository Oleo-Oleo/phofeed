fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('feed');
    const now = new Date();

    posts.forEach(post => {
      const postDate = new Date(post.date);
      const hoursPassed = (now - postDate) / (1000 * 60 * 60);

      // 24시간 게시물: 하루 지나면 숨김
      if (!post.permanent && hoursPassed > 24) return;

      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `
        <img src="${post.image}" alt="">
        <p>${post.desc}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error('게시물 불러오기 오류:', err);
  });