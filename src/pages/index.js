import React from "react"
import { Link } from "gatsby"

import Landing from "../components/landing.js"
import Footer from "../components/footer.js"
import CTA_Dual from "../components/cta_dual.js"
import Section_Header from "../components/section_header.js"
import Img_Text_Block from "../components/img_txt_block.js"

import Table from "../components/elements/table.js"
import Button from "../components/elements/button.js"

// Assets
import code_stock_photo from "../../public/icons/code.svg"
import stats_stock_photo from "../../public/icons/stats.svg"
import share_stock_photo from "../../public/icons/communism.svg"
import bg from "../../public/icons/bg.png"
/*
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)
*/
const IndexPage = () => (
  <div>
    <Landing 
      bg_image = {code_stock_photo}
    >
      <h1>Vega Trading</h1>
      <h2 style={{marginTop: `1rem !important`}}>Sensitivity to volatility</h2>
      <Button url="mailto:schafer@uchicago.edu" 
              text="Contact us"
              />
    </Landing>
    <Section_Header
      topline = "We approach capital markets from a novel, contrarian perspective."
      bottomline = "Here's how:"
    />
    <Img_Text_Block
      backgroundColor = "#ffffff"
      img_src = {stats_stock_photo}
    >
      <h1>Our Philosophy</h1>
      <p>Large financial institutions and asset managers often rely on assumptions of normality. 
        While this approach is often useful, we avoid its flaws:</p>
      <Table>
        <h2>Kurtosis</h2>
        <p>In theory, publicly traded assets have much lighter tails than in practice. 
          Our algorithms consider market volatility more accurately.</p>
        <h2>Chaos</h2>
        <p>It is impossible to anticipate all possible new information.
          At Vega, we develop trading strategies with the axiom that markets have a chaotic nature.</p>
      </Table>
    </Img_Text_Block>
    <Img_Text_Block
      backgroundColor = "#dddddd"
      img_src = {code_stock_photo}
    >
      <h1>Multi-Disciplinary Approach to Markets</h1>
      <p>After diligent research and rigorous statistical modeling, we backtest our models. 
         We discuss the results and make decisions through extensive collaboration.</p>
      <Table>
        <h2>Computer Science</h2>
        <p>Our research and infrastructure is built on a thorough understanding of computer science.</p>
        <h2>Statistics</h2>
        <p>Through statistical analysis, we uncover market behaviours to develop our strategies. </p>
        <h2>Mathematics</h2>
        <p>Inspired by Benoit Mandelbrot, our traders apply fractal mathematics and chaos theory.</p>
      </Table>
    </Img_Text_Block>
    <Img_Text_Block
      backgroundColor = "#271F16"
      altColor = "#dddddd"
      img_src = {share_stock_photo}
    >
      <h1>Bringing Transparency to Quantitative Finance</h1>
      <p>At Vega Trading, we aim to ultimately publicize the results of our strategies and research. 
         Currently, we are in the early stages of development, but we plan to make our strategies 
         usable to others in the future.
      </p>
    </Img_Text_Block>
    <CTA_Dual
      cta_1 = "Join Us"
      dest_1 = "/join"
      cta_2 = "Our Team"
      dest_2 = "/"
    />
    <Footer />
  </div>
)

export default IndexPage
