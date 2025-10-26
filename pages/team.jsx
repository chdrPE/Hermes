// Team Members placeholder
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TeamPage() {
    return (
        <>
            <head> 
                <title>Team</title>
                <meta name="description" content="Our Team" />
            </head>
 
            <Navbar/>

            <main>
                <header>
                    <h1>Meet our team</h1>
                    <p>Passionate students building innovative digital 
                        solutions through collaborative projects</p> 
                </header>

                //Css for modifying and improving the appereance

                <section>
                    <p>Innovators</p>
                    <h2>Our team</h2>
                    <p>Dedicated students transforming ideas into powerful
                            digital experiences</p>
                </section>

                //Component for image + name + role + ...

                <section>
                    <h2>Team Voices</h2>
                    <p>Insights from our passionate student innovators</p>
                </section>

                // Component for comments (User + name + stars + ...)

                <section>
                    <h6>Connect</h6> // h6 so it's easy to modify using css
                    <h3>Contact us</h3> // same as before (different from other h2)
                    <h6>Interested in collaboration or have questions about our student
                        -driven digital projects</h6>
                </section>

                // Component for email, phone, office

                // Image 


            </main>

            
            <Footer />
            
        </>
    )    
}
