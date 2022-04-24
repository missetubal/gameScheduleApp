import React from 'react';
import colors from '../../style/colors';
import {Title, View} from '../../style/general.style';
import {Container, Image} from './category.style';
import CategoryProps from './category.types';

const Categories: React.FC<CategoryProps> = props => {
  return (
    <View paddingTop={1}>
      <Container backgroundColor={colors.card}>
        <Image source={props.image} />
        <Title fontSize={15} marginBottom={17}>
          {props.name}
        </Title>
      </Container>
    </View>
  );
};

export default Categories;
