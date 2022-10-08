import { Text, ScrollView, StyleSheet } from 'react-native';

const ScrollPage = () => {

  return (
    <ScrollView>
      <Text style={text}>
        Mik Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla voluptatem voluptatibus ex, excepturi natus nihil expedita et numquam ab, esse pariatur suscipit dolorum alias enim corrupti accusamus maiores! Placeat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora quibusdam soluta impedit unde amet molestiae sequi nemo dolor voluptatem. Assumenda eaque distinctio quos! Adipisci officia dolore fuga qui ea!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis eum modi expedita reiciendis, voluptatem eaque vero dicta iusto deleniti cumque cum dolorem quae maiores fuga qui nesciunt consequatur. Facilis, aliquam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error nesciunt, ad distinctio culpa consectetur rerum provident ipsa quam ratione in quidem modi quis maxime, nobis porro. Fugit, tempora beatae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, optio delectus, esse aliquid distinctio quae, possimus exercitationem aspernatur nihil repudiandae fuga magni vitae? Ipsam accusantium, recusandae repudiandae eius dolorum molestias?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque a natus nam ut necessitatibus, labore cumque omnis. Molestiae, perspiciatis. Veritatis deserunt facere cumque, vitae fugit quam itaque facilis ipsam corrupti!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, autem! Voluptas asperiores assumenda ad, harum amet consequuntur accusamus architecto quae voluptatum, soluta, omnis ea. Pariatur nihil iusto provident quos quae.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, commodi officiis! Sint cum dolorem excepturi numquam quia eum. Excepturi molestias quisquam architecto inventore provident, accusantium dolores ex? Fugit, unde voluptatum.
      </Text>
    </ScrollView>
  );
}

const page = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#000'
  },
});

const text = StyleSheet.compose(page.text);

export default ScrollPage;