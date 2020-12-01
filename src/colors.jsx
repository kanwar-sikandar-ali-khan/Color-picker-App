import React from 'react'
import PropTypes from 'prop-types'


class Colors extends React.Component {
    static PropType = {
        colors: PropTypes.array.isRequired
    };
    render() {
        return (
            <div className="container b">

                <h1 className="heading">COLOR PICKER</h1>


                <div className="row "  >



                    {this.props.colorNames.map((color) => {
                        return (
                            <div className="col-md-3 " key={color} style={{ backgroundColor: color, height: '150px', width: '20px', color: 'white', textAlign: "center" }}>
                                {color}
                            </div>

                        )

                    })}


                </div>
            </div>

        )
    }
}

export default Colors;