import Hero from "../components/sections/Hero"
import FeatureDrop from "../components/sections/FeatureDrop"
import HowItWorks from "../components/sections/HowItWorks"
import ProductGrid from "../components/sections/ProductGrid"
import SocialProof from "../components/sections/SocialProof"
function Home() {
    return(
        <main>
            <Hero/>
            <FeatureDrop/>
            <HowItWorks/>
            <ProductGrid/>
            <SocialProof/>
        </main>
    )
}

export default Home