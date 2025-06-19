// Chart.js animated bar graph
const ctx = document.getElementById('impactChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Carbon Reduction (Tons)',
      data: [150, 300, 450, 600, 850],
      backgroundColor: '#2a9d8f'
    }]
  },
  options: {
    scales: {
      x: { ticks: { color: '#fff' } },
      y: { ticks: { color: '#fff' } }
    },
    plugins: {
      legend: { labels: { color: '#fff' } }
    }
  }
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;
setInterval(() => {
  testimonials[current].classList.remove('active');
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add('active');
}, 4000);

// Scroll-triggered background lightening
window.addEventListener('scroll', () => {
  const scroll = window.scrollY / document.body.scrollHeight;
  document.body.style.backgroundColor = `rgb(${27 + scroll * 100}, ${27 + scroll * 100}, ${27 + scroll * 100})`;
});
