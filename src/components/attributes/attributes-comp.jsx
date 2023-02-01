import React, { PureComponent } from "react";

import {
  AttributeGroupe,
  AttributeName,
  Attribute,
  MiniAttribute,
  Container,
} from "./attributes-styles";

export class Attributes extends PureComponent {
  render() {
    const { attributes, selectAttribute, big, selectable } = this.props;
    return (
      <>
        {attributes.map(({ id, name, items, type }) => (
          <Container key={id}>
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
                    selectable={selectable}
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
          </Container>
        ))}
      </>
    );
  }
}

export default Attributes;
