import CatImage from '../components/CatImage';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Geração de Gatos Aleatórios</h1>
      <p>Clique no botão abaixo para gerar uma imagem de gato e um nome aleatório!</p>
      <CatImage />
    </div>
  );
}
