import * as Styled from './styles';

export function Card() {
  return (
    <Styled.Container>
      <Styled.Header>
        <h3>Javascript data types and data structures</h3>
        <span>Há 1 dia</span>
      </Styled.Header>

      <span>
        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est id, eum mollitia corrupti dolores quas aut
        voluptatem et nam aspernatur veniam autem sapiente! Molestiae sed odit quaerat dolore. Minima! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Error provident quas dolorem quibusdam a, illum possimus, iste illo esse
        pariatur aut nisi voluptates ipsum ut, exercitationem vel quod dolore quae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Odit quis laudantium rem. Tempora placeat, accusamus facilis aut provident
        consectetur corporis itaque temporibus perferendis ratione culpa amet saepe et officia aliquid. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Dolore recusandae doloribus earum cum beatae maxime iusto ullam
        harum voluptatum. Nisi voluptatum quisquam culpa maxime veritatis assumenda repellendus nostrum dolorem eius!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus, dolor obcaecati laborum,
        dolores et a, blanditiis hic facilis officiis tenetur ipsum laboriosam consectetur corrupti maiores dolore
        deserunt porro reprehenderit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos odit soluta, ad cum
        enim quae doloribus tempore debitis incidunt nisi modi minima facere minus, iusto, voluptatem iste fugiat
        officiis nemo!`.slice(0, 180)}
        {'...'}
      </span>
    </Styled.Container>
  );
}
