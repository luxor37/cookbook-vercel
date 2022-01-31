import RecipeList from "@/components/modules/reicpe-list";
import LinkButton from "@/components/shared/link-button";
import Page from "@/components/shared/page";
import RecipeCard from "@/components/shared/recipe-card";
import Row from "@/components/shared/row";
import TextInput from "@/components/shared/text-input";
import { getFilteredRecipe } from "lib/api";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from "react";


export default function Homepage({ locale }) {

	const [search, setSearch] = useState("")
	const [recipes, setRecipes] = useState([])
	const { t } = useTranslation('common');

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
			<div className="rounded-lg shadow-md md:m-5 m-2 p-3">
				<Row>
					<TextInput
						className=" w-full"
						value={search}
						onChange={setSearch}
						name="search"
						placeholder={t('Search') + "..."}
					/>
				</Row>
				<div >
					<Row>
						<h5>
							{t('Quick access')} :
						</h5>
						<div className="sm:block hidden">
							<LinkButton className="ml-5 mr-5" href="/appetizers" text={t('Appetizers')} />
							<LinkButton className="mr-5" href="/maindishes" text={t('Main Dishes')} />
							<LinkButton className="mr-5" href="/desserts" text={t('Desserts')} />
							<LinkButton className="mr-5" href="/drinks" text={t('Drinks')} />
							<LinkButton className="mr-5" href="/others" text={t('Others')} />
							{/* <a className="no-underline ml-5 mr-5" href="/appetizers">{t('Appetizers')}</a>
							<a className="no-underline mr-5" href="/maindishes">{t('Main Dishes')}</a>
							<a className="no-underline mr-5" href="/appetizers">{t('Desserts')}</a>
							<a className="no-underline mr-5" href="/appetizers">{t('Drinks')}</a>
							<a className="no-underline mr-5" href="/appetizers">{t('Others')}</a> */}
						</div>
					</Row>
					<Row className="sm:hidden block">
						<ol>
							<li><LinkButton className=" my-2" href="/appetizers" text={t('Appetizers')} /></li>
							<li><LinkButton className=" my-2" href="/maindishes" text={t('Main Dishes')} /></li>
							<li><LinkButton className=" my-2" href="/desserts" text={t('Desserts')} /></li>
							<li><LinkButton className=" my-2" href="/drinks" text={t('Drinks')} /></li>
							<li><LinkButton className=" my-2" href="/others" text={t('Others')} /></li>
						</ol>
					</Row>
				</div>
			</div>

			<RecipeList recipes={recipes} />
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