import Lang from "@/components/shared/lang";
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
							{t('Categories')} :
						</h5>
						<div className="sm:block hidden">
							<a className="no-underline ml-5 mr-5" href="/appetizers">{t('Appetizers')}</a>
							<a className="no-underline mr-5" href="/appetizers">{t('Main Dishes')}</a>
							<a className="no-underline mr-5" href="/appetizers">{t('Desserts')}</a>
							<a className="no-underline mr-5" href="/appetizers">{t('Drinks')}</a>
							<a className="no-underline mr-5" href="/appetizers">{t('Others')}</a>
						</div>
					</Row>
					<Row className="sm:hidden block">
						<ol className=" list-disc">
							<li><a className="no-underline" href="/appetizers">{t('Appetizers')}</a></li>
							<li><a className="no-underline" href="/appetizers">{t('Main Dishes')}</a></li>
							<li><a className="no-underline" href="/appetizers">{t('Desserts')}</a></li>
							<li><a className="no-underline" href="/appetizers">{t('Drinks')}</a></li>
							<li><a className="no-underline" href="/appetizers">{t('Others')}</a></li>
						</ol>
					</Row>
				</div>
			</div>

			{!recipes ? "" : recipes.map(
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