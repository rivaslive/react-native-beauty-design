import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Card,
  StoreCard,
  ProductCard,
  Title,
  ShoppingCard,
} from 'react-native-beauty-design';

const CardScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Card
            image="https://img.bekiafit.com/articulos/portada/67000/67260.jpg"
            subTitle="NEW"
            title='Chicken Pizza 12"'
            summary="Delicious charcoal burgers"
          />
          <Card
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-best-seller-ad-template-design-8627a123f54b4dcdab1789d3c47007e9_screen.jpg?ts=1586668777"
            subTitle="NEW"
            title='Chicken Pizza 12"'
          />
        </View>
        <View style={styles.marginTop}>
          <Title level={2}>Store Cards</Title>
          <StoreCard
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-best-seller-ad-template-design-8627a123f54b4dcdab1789d3c47007e9_screen.jpg?ts=1586668777"
            feature="NEW ITEM"
            tag="Tag para mostrar"
            title="BURGER HAUS"
            summary="Summary for show"
          />
          <StoreCard
            image="https://img.bekiafit.com/articulos/portada/67000/67260.jpg"
            title="Chicken Pizza"
            tag="Tag for show"
            summary="Summary for show"
          />
        </View>
        <View style={styles.marginTop}>
          <Title level={2}>Product Cards</Title>
          <ProductCard
            withBorderBottom
            image="https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg"
            feature="NEW ITEM"
            title="BURGER HAUS"
            brand="RivasLive"
            price="$30.00"
            beforePrice="$15.00"
            rating={4.5}
          />
          <ProductCard
            withBorderBottom
            image="https://es.beyondtype2.org/wp-content/uploads/2019/05/BT2-THUMB-RECIPES-CHICKEN-PARM-PIZZA.png"
            title="Chicken Pizza lorem ipsum generate extra title here, maximum"
            brand="Nike"
            price="$10.00"
          />
          <ProductCard
            image="https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg"
            title="BURGER HAUS"
            brand="RivasLive"
            beforePrice="$5.00"
            rating={false}
            price="$3.00"
          />
        </View>
        <View style={styles.marginTop}>
          <Title level={2}>Shopping carts</Title>
          <Title level={4}>Default Shopping Card</Title>
          <ShoppingCard
            withBorderBottom={false}
            image="https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg"
            title="BURGER HAUS"
            beforePrice="$5.00"
            bottomText="In stock"
            price="$3.00"
          />
          <Title level={4}>With max value</Title>
          <ShoppingCard
            withBorderBottom={false}
            stockText="In stock"
            image="https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg"
            title="BURGER HAUS"
            price="$30.00"
            beforePrice="$15.00"
            controllerProps={{
              max: 3,
              maxOverflow: () => alert('Maximo'),
            }}
          />
          <Title level={4}>With min value and bottom line</Title>
          <ShoppingCard
            withBorderBottom
            stockText="In stock"
            image="https://es.beyondtype2.org/wp-content/uploads/2019/05/BT2-THUMB-RECIPES-CHICKEN-PARM-PIZZA.png"
            title="Chicken Pizza lorem ipsum generate extra title here, maximum"
            price="$10.00"
            controllerProps={{
              minOverflow: () => alert('Minimo alcanzado'),
            }}
          />
          <View style={{ height: 75 }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  button: {},
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  darkView: { backgroundColor: 'rgb(0, 0, 0)', padding: 20 },
  space: {
    marginTop: 50,
  },
  cardOne: {},
  cardContent: {
    flexDirection: 'row',
  },
  marginTop: {
    marginTop: 20,
  },
});

export default React.memo(CardScreen);
