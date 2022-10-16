import RecipeList from "@/components/modules/recipe-list";
import LinkButton from "@/components/shared/link-button";
import Page from "@/components/shared/page";
import { Box, Heading, HStack, Input, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { getFilteredRecipe } from "lib/api";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from "react";


export default function Homepage({ locale }) {

	const [search, setSearch] = useState("")
	const [recipes, setRecipes] = useState([])
	const { t } = useTranslation('common');

	const paths = [
		{ path: "/appetizers", name: t('Appetizers') },
		{ path: "/maindishes", name: t('Main Dishes') },
		{ path: "/desserts", name: t('Desserts') },
		{ path: "/drinks", name: t('Drinks') },
		{ path: "/others", name: t('Others') },
	]

	useEffect(() => {
		console.log(locale)

		if (search && search.length >= 0 && (search.replace(' ', '')).length != 0) {

			const fetchData = async () => {
				const response = await getFilteredRecipe(search, locale)
				setRecipes(response)
			};

			fetchData()
		}
		else if (search.length == 0) {
			setRecipes([])
		}
	}, [search, setSearch])

	return (
		<Page>
			<Box className="rounded-lg shadow-md md:m-5 m-2 p-3">
				<Box>
					<Input
						type="text"
						width={'full'}
						value={search}
						onChange={(event) => setSearch(event.target.value)}
						name="search"
						placeholder={t('Search') + "..."}
					/>
				</Box>
				<Box>
					<HStack>
						<Heading as='h5' size='sm'>
							{t('Quick access')} :
						</Heading>
						<HStack display={{ base: "none", sm: "flex" }}>
							{paths.map(({ path, name }, index) => {
								return (<LinkButton ml={'1.25rem'} mr={index === 0 ? '1.25rem' : ''} href={path} text={name} key={index} />)
							})}
						</HStack>
					</HStack>
					<HStack display={{ base: "flex", sm: "none" }}>
						<UnorderedList>
							{paths.map(({ path, name }, index) => {
								return (<ListItem key={index}><LinkButton my={"0.5rem"} href={path} text={name} key={index} /></ListItem>)
							})}
						</UnorderedList>
					</HStack>
				</Box>
			</Box>

			{!recipes || recipes.length == 0
				? (<Heading as='h2' size='2xl' textAlign={'center'}>{t("No results")}</Heading>)
				: (<RecipeList recipes={recipes} />)
			}
		</Page >
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