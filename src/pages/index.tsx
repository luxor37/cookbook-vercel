import Page from "@/components/shared/page";
import RecipeCard from "@/components/shared/recipe-card";
import TextInput from "@/components/shared/text-input";
import { getFilteredRecipe } from "lib/api";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from "react";


export default function Homepage({ locale }) {

	const [search, setSearch] = useState("")
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		console.log(locale)

		if (search && search.length >= 0 && (search.replace(' ', '')).length != 0) {

			const fetchData = async () => {
				const response = await getFilteredRecipe(search, locale)
				setRecipes(response)
			};

			fetchData()
		}
	}, [search, setSearch])

	return (
		<Page>
			<div className="flex flex-row rounded-lg shadow-md md:m-5 m-2 p-3">
				<TextInput
					className=" w-full"
					value={search}
					onChange={setSearch}
					name="search"
					placeholder="recherche..."
				/>
			</div>

			{!recipes? "" : recipes.map(
                ({ _id, title, servings, time, tags, picture, source }) => {
                    return (
                        <RecipeCard _id={_id} title={title} time={time} servings={servings}
                            image={picture} tags={tags} key={_id} />
                    )
                }
            )}
		</Page>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			locale,
			...await serverSideTranslations(locale, ['common']),
		},
		revalidate: 5
	}
}