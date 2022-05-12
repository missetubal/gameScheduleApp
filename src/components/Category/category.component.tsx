import React, {useState} from 'react';
import {Checklist} from '../../pages/NewMatch/newMatch.style';
import colors from '../../style/colors';
import {Title} from '../../style/general.style';
import {Container, Image} from './category.style';
import {CategoryChoosenProps} from './category.types';

const Categories: React.FC<CategoryChoosenProps> = props => {
  const {data, onPress} = props;
  const selectDataTypeButton = (id: number) => onPress(id);

  const [hasChecked, setHasChecked] = useState(data[0].name);
  return (
    <>
      {data.map((value, index) => (
        <Container
          backgroundColor={colors.card}
          key={index}
          onPress={() => {
            setHasChecked(value.name);
            selectDataTypeButton(value.id);
          }}
          extraData={selectDataTypeButton}
          opacity={value.isChecked ? 0 : 0.5}>
          {props.needCheck ? (
            <Checklist
              backgroundColor={
                hasChecked === value.name ? colors.redish : colors.card
              }
            />
          ) : null}

          <Image source={value.image} />
          <Title fontSize={15} marginBottom={17}>
            {value.name}
          </Title>
        </Container>
      ))}
    </>
  );
};

export default Categories;
