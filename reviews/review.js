let coursesData = [];

    function renderStars(rating) {
      const fullStars = Math.floor(rating);
      const halfStar = rating - fullStars >= 0.5;
      let stars = "";
      for(let i = 0; i < fullStars; i++) stars += "⭐";
      if(halfStar) stars += "✰";
      while(stars.length < 5) stars += "☆";
      return stars;
    }

    function renderCourses(courses) {
      const container = document.getElementById('coursesContainer');
      container.innerHTML = "";
      if(courses.length === 0) {
        container.innerHTML = "<p>This course doesn't found</p>";
        return;
      }
      courses.forEach(course => {
        const courseEl = document.createElement('div');
        courseEl.classList.add('course-card');
        courseEl.innerHTML = `
          <img src="${course.image}" alt="${course.title}" />
          <div class="course-title">${course.title}</div>
          <div class="course-desc">${course.description}</div>
          <div class="rating">rating: ${renderStars(course.average_rating)} (${course.average_rating.toFixed(1)})</div>
          <div class="reviews">
            <strong>student's reviews :</strong>
            ${course.reviews.map(r => `
              <div class="review">
                <strong>${r.name} - ${renderStars(r.rating)}</strong>
                <div>${r.comment}</div>
              </div>`).join('')}
          </div>
        `;
        container.appendChild(courseEl);
      });
    }

    async function loadCourses() {
      try {
        const response = await fetch('reviews.json');
        const data = await response.json();
        coursesData = data.courses;
        renderCourses(coursesData);
      } catch(e) {
        console.error("خطأ في تحميل بيانات الكورسات:", e);
      }
    }

    document.getElementById('searchInput').addEventListener('input', e => {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = coursesData.filter(course => 
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm)
      );
      renderCourses(filtered);
    });

    loadCourses();