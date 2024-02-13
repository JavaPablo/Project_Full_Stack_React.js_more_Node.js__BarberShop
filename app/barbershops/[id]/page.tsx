import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_component/barbershop-info";

interface BarbershopDetailsPageprops {
    params: {
        id?: string;
    }
}

const BarbershopDetailsPage = async ({params}:BarbershopDetailsPageprops) => {
   if(!params.id) {
    // TODO: redirecionar para home page
    return null;
   }
   
    const barbershop = await db.barbershop.findUnique ({
        where: {
            id: params.id,
        }
    });

    if(!barbershop) {
        // TODO: redirecionar para home page
        return null;
    }

    return (
       <BarbershopInfo barbershop={barbershop} />
    );
}
 
export default BarbershopDetailsPage;