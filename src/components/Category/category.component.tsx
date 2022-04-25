import React, {useState} from 'react';
import {Checklist} from '../../pages/NewMatch/newMatch.style';
import colors from '../../style/colors';
import {Title} from '../../style/general.style';
import {Container, Image} from './category.style';
import CategoryProps from './category.types';

const Categories: React.FC<CategoryProps> = props => {
  const [hasChecked, setHasChecked] = useState(false);
  return (
    <Container
      backgroundColor={colors.card}
      onPress={() => setHasChecked(!hasChecked)}>
      {props.isChecked && (
        <Checklist backgroundColor={hasChecked ? colors.redish : colors.card} />
      )}
      <Image source={props.image} />
      <Title fontSize={15} marginBottom={17}>
        {props.name}
      </Title>
    </Container>
  );
};

export default Categories;
