export { Page }
import './home.scss'
function Page() {
  return (
    <main>
      <div className="content">
        <div className="greeting">
          <p className='introduction'>Hi 👋, I'm</p>
          <h1 className="name">Nzuzo Malinga</h1>
          <p className='job-title'>Full-stack Developer</p>
          <p className="job-description">I deliver scalable digital solutions.</p>
        </div>
        <div className="photo-container">
          <img src="/assets/pngs/nzuzomalinga.png" alt="nothing" className="photo" />
        </div>
      </div>
      <div className="call-to-action">
        <a href='https://calendly.com/nzuzomalinga/software-development-consultation'> Interview me 📋</a>
        <a href='https://calendly.com/nzuzomalinga/software-development-consultation'> Full-stack Development 🥪</a>
        <a href='https://calendly.com/nzuzomalinga/software-development-consultation'> Front-end Development 🖌️</a>
        <a href='https://calendly.com/nzuzomalinga/software-development-consultation'> SSR and SEO 📈</a>
      </div>

      <div className="service-descriptions">
        <h2>Interview Me 📋 <span><img src="../../assets/pngs/info.png" alt="" /></span></h2>
        <p>Looking to discuss your needs and explore potential collaboration opportunities? Schedule a meeting with me for a personalized interview.</p>

        <h2>Full-stack Development 🥪</h2>
        <p>Explore comprehensive full-stack development services tailored to meet your project requirements. Let's build something amazing together!</p>

        <h2>Front-end Development 🖌️</h2>
        <p>Elevate your user experience with expert front-end development. From design to implementation, I've got your front-end needs covered.</p>

        <h2>SSR and SEO 📈</h2>
        <p>Unlock the power of Server-Side Rendering (SSR) and optimize your website for search engines (SEO). Enhance performance and visibility with these services.</p>
      </div>

      <h1 className="work-history-title">Organisations I've worked with 🤝</h1>
      <table className="dotted-table">

<tr>
  <td><a target="_blank" href="https://www.facebook.com/hackathon/"><img src="/assets/svgs/meta.svg" alt="Image 1" /></a></td>
  <td><a target="_blank" href="https://www.turnbuckle.co.za/"><img src="/assets/pngs/turnbuckle.png" alt="Image 2" /></a></td>
  <td><a target="_blank" href="https://black-box.io/"><img src="/assets/pngs/blackbox.png" alt="Image 3" /></a></td>
</tr>
<tr>
  <td><a target="_blank" href="https://www.opencitieslab.org/"><img src="/assets/pngs/ocl.png" alt="Image 1" /></a></td>
  <td><a target="_blank" href="https://www.polity.org.za/article/npos-launch-sas-first-automated-expungement-app-2023-05-18"><img src="/assets/svgs/freedoms_logo.svg" alt="Image 2" /></a></td>
</tr>

</table>
<h1 className="work-history-title">Projects I've deployed or maintained🚀🔩</h1>
<table className="dotted-table">

<tr>
  <td><a target="_blank" href="https://tickets.computicket.com/"><img src="/assets/pngs/computicket.png" alt="Image 1" /></a></td>
  <td><a target="_blank" href="https://rentastore.co.za/storage-facility/sandton/storage-unit-127"><img src="/assets/svgs/rentastore.svg" alt="Image 2" /></a></td>
  <td><a target="_blank" href="https://www.miahealthcare.co.za/"><img src="/assets/svgs/mia.svg" alt="Image 3" /></a></td>
</tr>
<tr>
  <td><a target="_blank" href="https://map.wrose.co.za/"><img src="/assets/svgs/wrose.svg" alt="Image 1" /></a></td>
  <td><a target="_blank" href="https://clearmeapp.co.za/"><img src="/assets/svgs/clearme.svg" alt="Image 2" /></a></td>
  <td><a target="_blank" href="https://www.scoda.co.za/scoda/socr#/public_transport_spend"><img src="/assets/pngs/scoda.png" alt="Image 3" /></a></td>
</tr>

<tr>
  <td><a target="_blank" href="https://openseat.co.za/"><img src="/assets/svgs/openseat.svg" alt="Image 1" /></a></td>
</tr>

</table>

    </main>
  )
}