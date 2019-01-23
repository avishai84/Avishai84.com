import React, { Component } from 'react';

class ConvertSVGTutorial extends Component{

  render() {
    return (
      <div className="svgTextTutorial">
          <div className="container TextSvg">
            <div className="row">
              <div className="page-header">
                <h1 className="screenreader">Convert Text to SVG</h1>
              </div>
              <div className="well">
                <div className="wrapper">
                  <h2>Steps to Convert Text to SVG:</h2>
                  <small>Prepared By Avishai for Avishai</small>
                <div>
                <ol>
                  <li>
                    <p className="full half">Import your PSD into Adobe Illustrator</p>
                    <img className="full half" src="../convert-text-to-SVG/image-1.png" alt="image"/>
                </li>
                <li>
                  <p className="full half">Select the entire text, hide all background images</p>
                  <img className="full half" src="../convert-text-to-SVG/image-3.png" alt="image" />
                </li>
                <li>
                  <p className="full half">Make sure the SVG document is coded to scale.</p>
                  <p className="full half">Go to Object -> Artboards -> Fit to Selected Art</p>
                  <img className="full half" src="../convert-text-to-SVG/image-4.png" alt="image" />
                </li>
                <li>
                  <p className="full half">Go to "Type" --> "Create Outlines"</p>
                  <img className="full half" src="../convert-text-to-SVG/image-5.png" alt="image" />
                </li>
                <li>
                  <p className="full half">Select the following in the SVG(svg) sub menus:</p>
                  <img className="full half" src="../convert-text-to-SVG/image-6.png" alt="image" />
                </li>
                <li>
                  <p className="full half">SVG(svg) sub menu setup:</p>
                  <p>Fonts: type: "Convert to Outlines"; Options: Image location: "Embed";
                  Advanced Options: CSS Properties: "Style Attributes"; click on SVG Code.</p>
                  <img className="full half" src="../convert-text-to-SVG/image-7.png" alt="image" />
                </li>
                <li>
                  <p className="full half">SVG Code- copy the code and as it as a text file</p>
                  <img className="full half" src="../convert-text-to-SVG/image-8.png" alt="image" />
                </li>
                <li>
                  <p className="full half" >Font Note: Illustrator must have the same fonts as your Photoshop file. Otherwide it would replace it with default fonts.</p>
                </li>
              </ol>
            </div>
            <h3>Here is the SVG:</h3>
            <button type="button" id="btnToggleText" style={{display:'inline-block'}}>Show/Hide SVG text</button>
            <button type="button" id="btnToggleImage" style={{display:'inline-block'}}>Show/Hide BG image</button>
            <div className="full half relative center">
              <img className="imgTog" src="../convert-text-to-SVG/BG_PROMODRAW_v2.png" alt="bg image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}



export default ConvertSVGTutorial;
