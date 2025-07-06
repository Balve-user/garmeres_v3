import { defineQuery } from "next-sanity";

export const DOCUMENTS_QUERY =
	defineQuery(`*[_type == "page" || _type == "blog-post"] {
    ...,
}`);

export const PAGES_QUERY =
	defineQuery(`*[_type == "page" && defined(language)] {
    ...,
}`);

export const TRANSLATED_PAGES_QUERY =
	defineQuery(`*[_type == "page" && language == $language] {
    ...,
}`);

export const BLOG_POSTS_QUERY =
	defineQuery(`*[_type == "blog-post" && defined(language)] {
    ...,
}`);

export const TRANSLATED_BLOG_POSTS_QUERY =
	defineQuery(`*[_type == "blog-post" && language == $language] {
...,
}`);

export const PAGE_QUERY =
	defineQuery(`*[_type == "page" && slug.current == $slug && language == $language][0]{
    ...,
    featured {
        _type,
        text,
        title,
        callToAction {
            title,
            link-> {
                _id,
                _type,
                slug,
                language
            }
        }
    }   
}`);

export const BLOG_POST_QUERY =
	defineQuery(`*[_type == "blog-post" && slug.current == $slug && language == $language][0]{
    ...,
}`);
