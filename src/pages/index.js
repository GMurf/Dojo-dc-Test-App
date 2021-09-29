import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>






    <div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_1_1615834604953_31274"><div class="sqs-block-content"><p class="" style="white-space:pre-wrap;">In this episode I sit down with the founder of <a href="https://instagram.com/sandlotsoutheast">Sandlot Southeast</a>, <a href="https://instagram.com/sandlotgeorgetown">Sandlot northwest</a>, Suite Nation, non-profit <a href="https://instagram.com/arenasocialdc">Arena Social DC</a> and community redevelopment leader Ian Callendar. As well as Rebecca Taber, founder &amp; co-CEO of non-profit organization<a href="https://meritamerica.org"> Merit America</a>, to discuss what it takes to create lasting impact. We chat about the catalyst for them becoming leaders in the world of building systems that benefit others and what it takes to create space where it doesn’t yet exist. Ian Calendar has become known for his work repurposing dilapidated structures and spaces in the DC community. Often creating cultural hubs in their place that promote the arts and serve as places for marginalized voices and creatives to come together and be seen. Rebecca developed Merit America to bridge the gap she saw in how opportunities for professional advancement and career growth were often not spread as evenly as they should be. Her company has created a system through strategic partnerships in which individuals who may have been derailed from a more advantageous career path are given the tools and training to enter into a job market that drastically improves their quality of life and earning potential. </p><p class="" style="white-space:pre-wrap;">Learn more about Ian Calendar and his projects: IG (<a href="https://instagram.com/ianeyecan">@ianeyecan</a>) </p><p class="" style="white-space:pre-wrap;">Learn more about <a href="https://meritamerica.org">Merit America</a>:</p></div></div>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
