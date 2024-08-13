import Button from './../components/Button';
import List from './../components/List';
import Card from './../components/Card';
    
export default function Home() {
    return (
        <>
            <Button text="Hola mundo 1" background='bg-red-600'/>
            <Button text="Hola mundo 2" background='bg-green-600'/>
            <Button text="Hola mundo 3" />
            <Button text="Hola mundo 4" />
            <List items={["Rápido", "Bonito", "Barato"]} />
            <List items={["Lento", "Feo", "Caro"]} />
            <Card title='LOVE2SHOP' description='Tarjeta de regalo prepago' image='https://www.getpark.co.uk/CATIMAGES/2024/lrg/5510-1.jpg' />
        </>
    );
}
   