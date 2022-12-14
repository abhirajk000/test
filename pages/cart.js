// import { cssFactory } from "@mantine/styles/lib/tss/use-css";
import Image from "next/image";
import { useStore } from "../store/store";
import Layout from "../components/Layout";
import { urlFor } from "../lib/client";
import css from '../styles/Cart.module.css'

export default function Cart() {
const CartData = useStore((state)=>state.cart)
return(
<Layout>

    <div className={css.container}>

{/* details */}
        <div className={css.details}>
            <table className={css.table}>
                <thead>
                    <th>Pizza</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </thead>
                <tbody className={css.body}>
                    {CartData.pizzas.length > 0 && 
                    CartData.pizzas.map((pizza, i)=> {

                        const src = urlFor(pizza.image).url()

                        return(
                        <tr key={i}>
                            <td clasName = {css.imageTd}>
                                <Image
                                loader = {()=> src}
                                src = {src}
                                alt=""
                                objectFit = "cover"
                                width = {85}
                                height = {85}
                                />
                            </td>
                            <td>
                                {pizza.name}
                            </td>
                            <td>
                                {
                                    pizza.size === 0 ?
                                    "Small" :
                                    pizza.size === 1 ?
                                    "Medium" :
                                    "Large"
                                }
                            </td>
                            <td>
                                {pizza.price}
                            </td>
                            <td>
                                {pizza.quantity}
                            </td>
                            <td>
                                {pizza.price * pizza.quantity}
                            </td>
                        </tr>
                    )})
                    }
                </tbody>
            </table>
        </div>

        {/* summart */}
        <div className={css.cart}></div>
    </div>
</Layout>
)
}