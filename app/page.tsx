export default function Page() {
	return (
		<div>
			homepage:
			<div className="w-full min-h-56 rounded-3xl p-5 bg-back2 flex flex-col md:flex-row md:justify-between">
				<div className="bg-secondary rounded-xl text-back2 w-80">img</div>
				<div className="max-w-96" dir="rtl">
					<span className="text-2xl">header - title</span>
					<p className="text-lg pt-2">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
						autem tempore! Deserunt dolorem, omnis obcaecati cumque temporibus
						inventore quo maiores, doloribus error, sapiente quibusdam nesciunt
						veniam animi! Explicabo, repudiandae.
					</p>
				</div>
			</div>
			<div>blogs</div>
		</div>
	);
}
