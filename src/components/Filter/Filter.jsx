import React, { Component } from 'react';
import { Box } from 'components/Common/Box.styled';
import { Button, Label, InputField } from './Filter.styled';

export class FilterForm extends Component {
  render() {
    const { onChange, filterValue, onClear } = this.props;

    return (
      <Box display="flex" flexDirection="column" my="10px" p="0" border="1px solid #888888" borderRadius="2px">
        <Label htmlFor="contactFIlter">
          Filter
          {filterValue.length > 0 && (
            <Button type="button" onClick={onClear}>
              ❌
            </Button>
          )}
        </Label>
        <InputField id="contactFIlter" onChange={onChange} type="text" name="filter" value={filterValue} />
      </Box>
    );
  }
}
