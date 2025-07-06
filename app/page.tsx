import { PAGES_QUERYResult } from "@/sanity.types";
import { SanityLive } from "@/sanity/lib/live";

function Posts({ posts }: { posts: PAGES_QUERYResult }) {
	return (
		<ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
			{posts.map((post) => (
				<li key={post._id}>
					<a
						className="block p-4 hover:bg-blue-50"
						href={`/posts/${post?.slug?.current}`}
					>
						{post?.title}
					</a>
				</li>
			))}
		</ul>
	);
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="min-h-screen bg-white">{children}</div>;
}
