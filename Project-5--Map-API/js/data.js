var incidentData = [
	{
		'street': '1010 Magnolia Street, Freeport, TX 77541',
		'census_code': 439,
		'lat': 28.944891,
		'lng': -95.356262,
		'information': [{'race_ethnicity': 'black',
					'status': 'injury',
					'carried_weapon': 'unarmed',
					'age': '30'}],
		'date': '2015,9,2',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/FreeportPoliceDepartment-2015-0000002.pdf'
	},
	{
		'street': '4840 E. Plano Parkway, Plano, TX 75074',
		'census_code': 085,
		'lat': 33.008157,
		'lng': -96.642206,
		'information': [{'race_ethnicity': 'white',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '55'}],
		'date': '2015,9,3',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/PlanoPoliceDepartment-2015-0000007.pdf'
	},
	{
		'street': '101 Couch Court, Springtown, TX 76082',
		'census_code': 367,
		'lat': 32.916472,
		'lng': -97.634237,
		'information': [{'race_ethnicity': 'white',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '36'}],
		'date': '2015,9,4',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/ParkerCountySheriff-2015-0000013.pdf'
	},
	{
		'street': '4926 Chennault Road, Houston, TX 77033',
		'census_code': 201,
		'lat': 29.681614,
		'lng': -95.344949,
		'information': [{'race_ethnicity': 'black',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '21'}],
		'date': '2015,9,5',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/HoustonPoliceDepartment-2015-0000001.pdf'
	},
	{
		'street': '1500 Range Road, DFW Airport, TX 75261',
		'census_code': 113,
		'lat': 32.874895,
		'lng': -97.061037,
		'information': [{'race_ethnicity': 'white',
					'status': 'injury',
					'carried_weapon': 'unarmed', 
					'age': '44'}],
		'date': '2015,9,8',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/IrvingPoliceDepartment-2015-0000023.pdf'
	},
	{
		'street': '2435 W. Northwest Hwy, Dallas, TX 75220',
		'census_code': 113,
		'lat': 32.860688,
		'lng': -96.882686,
		'information': [{'race_ethnicity': 'hispanic',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '29'}],
		'date': '2015,9,9',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/DallasPoliceDepartment-2015-0000040.pdf'
	},
	{
		'street': '300 Block Galley Way, Freeport, TX 77541',
		'census_code': 039,
		'lat': 29.001476,
		'lng': -95.305232,
		'information': [{'race_ethnicity': 'white',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '29'}],
		'date': '2015,9,13',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/AlvinPoliceDepartment-2015-0000008.pdf'
	},
	{
		'street': '11513 Marriot, Balch Springs, TX 75180',
		'census_code': 113,
		'lat': 32.730317,
		'lng': -96.629162,
		'information': [{'race_ethnicity': 'white',
					'status': 'injury',
					'carried_weapon': 'unarmed', 
					'age': 'unknown'}],
		'date': '2015,9,16',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/BalchSpringsPoliceDepartment-2015-0000003.pdf'
	},
	{
		'street': '5027 Pecan Grove, San Antonio, TX 78222',
		'census_code': 029,
		'lat': 29.3754,
		'lng': -98.42063,
		'information': [{'race_ethnicity': 'black',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '22'}],
		'date': '2015,9,18',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/BexarCountyConstablePrecinct4-2015-0000010.pdf'
	},
	{
		'street': '9030 Betel Apartment Complex, El Paso, TX 79915',
		'census_code': 141,
		'lat': 31.704927,
		'lng': -106.310623,
		'information': [{'race_ethnicity': 'hispanic',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '21'}],
		'date': '2015,9,21',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/ElPasoPoliceDepartment-2015-0000004.pdf'
	},
	{
		'street': '10800 Stone Canyon Road, Dallas, TX 75230',
		'census_code': 113,
		'lat': 32.894743,
		'lng': -96.774536,
		'information': [{'race_ethnicity': 'hispanic',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '24'}],
		'date': '2015,9,21',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/DallasPoliceDepartment-2015-0000005.pdf'
	},
	{
		'street': '800 Deshong Road, Paris, TX 75460',
		'census_code': 277,
		'lat': 33.687355,
		'lng': -95.547678,
		'information': [{'race_ethnicity': 'white',
					'status': 'death',
					'carried_weapon': 'unarmed', 
					'age': '21'}],
		'date': '2015,9,21',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/TexasDepartmentofPublicSafety-2015-0000036.pdf'
	},
	{
		'street': '1300 Eldarodo Pkwy, McKinney, TX 75069',
		'census_code': 085,
		'lat': 33.177661,
		'lng': -96.637181,
		'information': [{'race_ethnicity': 'other/unknown',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '35'}],
		'date': '2015,9,23',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/McKinneyPoliceDepartment-2015-0000038.pdf'
	},
	{
		'street': '942 West Gulfway Drive, Port Arthur, TX 77640',
		'census_code': 245,
		'lat': 29.869673,
		'lng': -93.955587,
		'information': [{'race_ethnicity': 'black',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '52'}],
		'date': '2015,9,24',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/PortArthurPoliceDepartment-2015-0000018.pdf'
	},
	{
		'street': '500 N Cooper Street, Arlington, TX 76012',
		'census_code': 439,
		'lat': 32.741067,
		'lng': -97.114715,
		'information': [{'race_ethnicity': 'black',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '38'}],
		'date': '2015,9,25',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/ArlingtonPoliceDepartment-2015-0000015.pdf'
	},
	{
		'street': '600 Block Robinson Road, Ponder, TX 76259',
		'census_code': 121,
		'lat': 33.16663,
		'lng': -97.277833,
		'information': [{'race_ethnicity': 'hispanic',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '41'}],
		'date': '2015,9,27',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/PonderPoliceDepartment-2015-0000066.pdf'
	},
	{
		'street': '972 T.L. Townsend Drive, Rockwall, TX 75087',
		'census_code': 397,
		'lat': 32.920682,
		'lng': -96.453196,
		'information': [{'race_ethnicity': 'white',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '49'}],
		'date': '2015,9,30',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/RockwallCountySheriffsOffice-2015-0000026.pdf'
	},
	{
		'street': '14800 XIT Trail, Amarillo, TX 79118',
		'census_code': 381,
		'lat': 35.057285,
		'lng': -101.882634,
		'information': [{'race_ethnicity': 'white',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '29'}],
		'date': '2015,10,2',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/RandallCountySheriff_sOffice-2015-0000055.pdf'
	},
	{
		'street': '5300 Block Thomason, Midland, TX 79703',
		'census_code': 329,
		'lat': 31.982534,
		'lng': -102.144938,
		'information': [{'race_ethnicity': 'hispanic',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '22'}],
		'date': '2015,10,3',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/MidlandCountySheriffDepartment-2015-0000014.pdf'
	},
	{
		'street': '1304 West Redbud, Hurst, TX 76053',
		'census_code': 439,
		'lat': 32.817659,
		'lng': -97.202446,
		'information': [{'race_ethnicity': 'white',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '51'}],
		'date': '2015,10,5',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/HurstPoliceDepartment-2015-0000019.pdf'
	},
	{
		'street': '417 HWY 277 North, Sonora, TX 76950',
		'census_code': 435,
		'lat': 32.920682,
		'lng': -96.453196,
		'information': [{'race_ethnicity': 'white',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '39'}],
		'date': '2015,10,8',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/SonoraPoliceDepartment-2015-0000021.pdf'
	},
	{
		'street': '777 Bateswood Drive, Houston, TX 77079',
		'census_code': 201,
		'lat': 29.773501,
		'lng': -95.593045,
		'information': [{'race_ethnicity': 'hispanic',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '22'}],
		'date': '2015,10,9',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/HoustonPoliceDepartment-2015-0000024.pdf'
	},
	{
		'street': '7844 W. Tidwell Road, Houston, TX 77040',
		'census_code': 201,
		'lat': 29.852288,
		'lng': -95.507586,
		'information': [{'race_ethnicity': 'black',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '22'}],
		'date': '2015,10,15',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/HoustonPoliceDepartment-2015-0000028.pdf'
	},
	{
		'street': '15187 County Road 236, Terrell, TX 75160',
		'census_code': 257,
		'lat': 32.772427,
		'lng': -96.313352,
		'information': [{'race_ethnicity': 'white',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '64'}],
		'date': '2015,10,23',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/TerrellPoliceDepartment-2015-0000027.pdf'
	},
	{
		'street': 'CR190 West on FM 651, Rural, TX 79322',
		'census_code': 107,
		'lat': 33.602035,
		'lng': -101.272615,
		'information': [{'race_ethnicity': 'white',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '55'}],
		'date': '2015,10,29',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/TexasDepartmentofPublicSafety-2015-0000048.pdf'
	},
	{
		'street': '6313 Saint Denis, Corpus Christi, TX 78414',
		'census_code': 355,
		'lat': 27.655531,
		'lng': -97.386334,
		'information': [{'race_ethnicity': 'hispanic',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '20'}],
		'date': '2015,10,30',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/CorpusChristiPoliceDepartment-2015-0000032.pdf'
	},
	{
		'street': '4243 Polk Street, Dallas, TX 75224',
		'census_code': 113,
		'lat': 32.693472,
		'lng': -96.840928,
		'information': [{'race_ethnicity': 'white',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '66'}],
		'date': '2015,10,30',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/DallasPoliceDepartment-2015-0000033.pdf'
	},
	{
		'street': '18600 IH 635, Mesquite,TX 75150',
		'census_code': 113,
		'lat': 32.806301,
		'lng': -96.626656,
		'information': [{'race_ethnicity': 'hispanic',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '29'}],
		'date': '2015,10,30',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/MesquitePoliceDepartment-2015-0000034.pdf'
	},
	{
		'street': '13630 Veterans Memorial, Houston, TX 77014',
		'census_code': 201,
		'lat': 29.984356,
		'lng': -95.495095,
		'information': [{'race_ethnicity': 'black',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '24'}],
		'date': '2015,10,30',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/HoustonPoliceDepartment-2015-0000043.pdf'
	},
	{
		'street': '18400 LBJ Fwy, Mesquite, TX 75150',
		'census_code': 113,
		'lat': 32.8078,
		'lng': -96.626752,
		'information': [{'race_ethnicity': 'hispanic',
					'status': 'death',
					'carried_weapon': 'armed', 
					'age': '29'}],
		'date': '2015,10,30',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/TexasDepartmentofPublicSafety-2015-0000037.pdf'
	},
	{
		'street': '300 Wall Street, Terrell, TX 75160',
		'census_code': 257,
		'lat': 32.750847,
		'lng': -96.275633,
		'information': [{'race_ethnicity': 'black',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '28'}],
		'date': '2015,10,31',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/TerrellPoliceDepartment-2015-0000031.pdf'
	},
	{
		'street': '4000 N. 19th Street, Waco, TX 76708',
		'census_code': 309,
		'lat': 31.582894,
		'lng': -97.175357,
		'information': [{'race_ethnicity': 'white',
					'status': 'injury',
					'carried_weapon': 'armed', 
					'age': '25'}],
		'date': '2015,10,31',
		'file_location': 'https://www.texasattorneygeneral.gov/files/cj/peace_officer/WacoPoliceDepartment-2015-0000049.pdf'
	}
];