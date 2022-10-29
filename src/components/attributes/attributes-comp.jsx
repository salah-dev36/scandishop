import React, { Component } from "react";

import {
  AttributeGroupe,
  AttributeName,
  Attribute,
  MiniAttribute,
} from "./attributes-styles";

export class Attributes extends Component {
  render() {
    const { attributes, selectAttribute, big } = this.props;
    return (
      <>
        {attributes.map(({ id, name, items, type }) => (
          <div key={id}>
            <AttributeName big={big}>{name}:</AttributeName>
            <AttributeGroupe big={big}>
              {items.map(({ selected, id, displayValue, value }) =>
                big ? (
                  <Attribute
                    type={type}
                    selected={selected}
                    title={displayValue}
                    key={id}
                    value={value}
                    onClick={() => selectAttribute(value, name)}
                  >
                    {type === "text" ? value : ""}
                  </Attribute>
                ) : (
                  <MiniAttribute
                    type={type}
                    selected={selected}
                    title={displayValue}
                    key={id}
                    value={value}
                  >
                    {type === "text" ? value : ""}
                  </MiniAttribute>
                )
              )}
            </AttributeGroupe>
          </div>
        ))}
      </>
    );
  }
}

export default Attributes;
