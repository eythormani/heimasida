import React from "react"

import "../../../styles/plan.css"
import "../../../styles/stefnur.css"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Tile from "../../../components/tile"

const PlanPage = () => (
  <Layout>
    <SEO title="Stefnur" />
    <div style={{ marginBottom: 112 }}>
      <div className="yellow-header-container">
        <div className="yellow-header">Stefnurnar mínar</div>
      </div>
      <div className="plan-header-container" style={{ marginTop: 40 }}>
        <div className="plan-header">
          Framúrskarandi menntun
        </div>
        <div className="plan-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
          ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit amet
          massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit metus,
          accumsan a purus quis, tempor accumsan neque. Nullam placerat, enim
          vel volutpat pellentesque, erat dui scelerisque nisi, egestas
          dignissim ipsum metus sed metus.
        </div>
      </div>
    </div>
    <div className="tileContainer">
      <Tile
        title="Endurgjaldlausar samgöngur fyrir nema"
        image="https://maelabord.reykjavik.is/extensions/MaelabordBorgarbua/UmhverfiogSamgongur.jpg"
        to="plan"
        fullWidth
      />
      <Tile
        title="Gróðurhús í grunn- og leikskóla"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Fjölbreyttara val í grunn- og framhalsskólum"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Aðgengi að fjarnámi er jafnréttismál"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Kennum krökkum kynfræðslu"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Endurhugsum samfélagsfræði og lífsleikni"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Forritun fyrir alla"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Lýðræðislegt endurmat á kennsluskránni"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
    </div>
  </Layout>
)

export default PlanPage
