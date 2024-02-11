import React from "react";
import Image from "next/image";
import { urlFor } from "lib/sanity";
import { LogoCloudProps } from ".";

function VariantA({ title, images }: LogoCloudProps) {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4 text-center">
				<h1 className="font-heading mb-12 text-2xl">{title}</h1>
				<div className="-mx-2 flex flex-wrap items-center justify-center">
					{images &&
						images?.map((image, index) => (
							<div
								className="mb-4 w-full px-2 md:w-1/3 lg:mr-10 lg:w-1/6 xl:mr-0"
								key={index}>
								{image?.image && (
									<div className="mx-auto flex h-[192px] w-[192px] items-center justify-center rounded bg-gray-50">
										<Image
											className="object-scale-down"
											src={urlFor(image?.image)}
											width={192}
											height={192}
											alt={image?.alt ?? `logoCloud-image${index}`}
										/>
									</div>
								)}
							</div>
						))}
				</div>
			</div>
		</section>
	);
}
export default React.memo(VariantA);
