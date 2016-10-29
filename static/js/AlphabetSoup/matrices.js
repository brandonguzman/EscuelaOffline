llenaSoup = function(soupPalabras1, soupPalabras2, soupPalabras3, soup1, soup2, soup3){
	soupPalabras1[0] = "HOUSE";
	soupPalabras1[1] = "CAR";
	soupPalabras1[2] = "BOARD";
	soupPalabras1[3] = "COMPUTER";
	soupPalabras1[4] = "CALCULATOR";
	soupPalabras1[5] = "MEMORANDUM";
	soupPalabras1[6] = "NOTEBOOK";
	soupPalabras1[7] = "PENCIL";
	soupPalabras1[8] = "MARKER";
	soupPalabras1[9] = "DESK";

	soupPalabras2[0] = "UNDERSTAND";
	soupPalabras2[1] = "COMMON";
	soupPalabras2[2] = "DEMOCRATIC";
	soupPalabras2[3] = "RELIGIOUS";
	soupPalabras2[4] = "BELIEVE";
	soupPalabras2[5] = "AFTERNOON";
	soupPalabras2[6] = "AIRPORT";
	soupPalabras2[7] = "AVENUE";
	soupPalabras2[8] = "APPROACH";
	soupPalabras2[9] = "ASK";

	soupPalabras3[0] = "AFTER";
	soupPalabras3[1] = "SERVICE";
	soupPalabras3[2] = "MARATHON";
	soupPalabras3[3] = "SINCE";
	soupPalabras3[4] = "SPORT";
	soupPalabras3[5] = "FIRST";
	soupPalabras3[6] = "INJURIES";
	soupPalabras3[7] = "ABOVE";
	soupPalabras3[8] = "CLOTHES";
	soupPalabras3[9] = "BUGS";

	soup1[0] = "WKBZMBRCVLMACRKGZFFAKMAGHOUSEQDLHCRNPWRPTQACMEKHBOLWWRGUKSEDRVITFABLDNRRICCCMCCAWMZAYNNVWNUTGPZOGRETUPMOCKWBNOPCPKORCDCAPYTCKOOBETONMEMORANDUMCU";
	soup1[1] = "LROTALUCLACXWUXLMNQOQYRAUTHOUSEIAAAKGKSEDHURACYRYNQBNJDPLOVEMAQCAOGUPEGTEINRRIHLEYXUAETBOARDNLFPBKVJMCDECJAMMARKERCZIZQOBZAJMAVDLHJCVDVNOTEBOOKH";
	soup1[2] = "CICZRESUOHOQAWXPENCILBIGRSPMARKERVLULAMAOOEKAZCCNYWZPTFOMXOGRMUDNAROMEMOTPKMELBBTSPAHDFEDUCEQOUHRRSKACATKSTXLACNALBOKSEDTOEXZANNRTRYKBNUXCMCONES";
	soup1[3] = "DRAOBGCUQSYMTTQRMZRVEZKUMLICNEPXCRGDPVYGESXSIEZNTNFEENZKOTRAGOQRRACRQULRRTKEXYPNLPJOSETKESUOHMLMPBWRARNDUOSEROTALUCLACHMBOPMXDGXZMQAKKRECSQCDESK";
	soup1[4] = "JGDBSTVLNYCLHKRPIBOARDSDUOEARVKXNZDMPOKJDESKECRAQBRVQSLICNEPJEAGDUNZRJTQETMEMORANDUMJODNPHKJBIPGUNOYNFWUFVMQDUOLRFCMTHOEYROTALUCLACNYYNHCDITNWPA";
	soup1[5] = "GWYCELXHIORPLRXMZIBRQWETTICEXCAEHYTUYFGMPNMACRULUKOOBETONOPJFSJRJPHGCHMMNECALCULATORTDLNSXVCRZCHFRGDRAOBKVLOBMDUIOIJLYDZNVZMARKERXEKZFLQMXFESUOH";
	soup1[6] = "IESUOHICARQGLMARQGAPIIJUKKFEELREKRAMPOSTKWYROXLURYRUCDRAOBXDDUWPHJCGBODNEHLMOGEDEFJASCUOLEZSTQRRCALCULATORZOKEPLSXPZNFUMOYPENCILRYSEZDLWLLSVWFDM";
	soup1[7] = "XETBIMARKERRWWUIYMAAQMEPMEYIKSEDHRTLUSQZAEPJLCUFDUVRRRRYDQPMNOTEBOOKWDMDAHCALCULATORRWUQTOMILXCAONEWCNKCGNNOMMHCARANLDRBEUCADRZEMGKIMBRPCEGPPVZH";

	soup2[0] = "EUNEVAPVGZTCINOOCEVEILEBDDEMOCRATICOYEDNMPEYXXRGSRXOMELBCCXJKSAOOCIMTNZTMTLNNKGMSMARLAJRPWIBJSEOENKEASOHDSXPCDDTPWUEUEYRIUAFQUSBMBZIZGYAHCAORPPA";
	soup2[1] = "SUOIGILERNEVFUEWCLHQOPGDMAPPROACHPUNXVKNOONRETFAVEROZWNYKURTENGMGTMLOJBSSUQMEVEILEBRAEROIOMPONPETOBCEFPLVYLDCITARCOMEDDNSCZSRUOCTJEUWDJKTROPRIAP";
	soup2[2] = "FTKNOONRETFAUMJDMKPEYTGFDNGNMXHLOJVANOOEXBQILJZPAMRVQWLGAIEPTMREPRCIPGTRSOXIYRTOEAGORCFLDXYUIGKAEUNEVAHSQNSCDWJBTROPRIAHNBCITARCOMEDUEFAOJQOMSBW";
	soup2[3] = "KALYUVBGBHWXCITARCOMEDYRZRJIOUNOLSVEAPPROACHIULLCOMMONZDEOBIPRXIZURAVIKGBTXMBIVVEGSRNOONRETFAIAEWMVXUXHYZLXTBZEUNEVAKEHSYEZBOIWHSRFALDNATSREDNUH";
	soup2[4] = "OYEVEILEBEINJDEMOCRATICOQNRUWZRHSCOOSAERHPBIAMMNETLYCHNBSAMRGSIAABZPCIOEIRGBOEEANRNTLEIERUNSYPPFEDONPNFCUOOARNUUPEKSARMYGUSAAVFQETLCUEKOJAZNOMOC";
	//soup2[5] = "";
	//soup2[6] = "";
	//soup2[7] = "";

	soup3[0] = "XHCMEPSBURKRASEIRUJNIYPEFEMVTYSFFEJTEHTUYTDRXCEFRTRJDSMIPNPAGOOIZRTFKISBDLPECIVRESRWMCSMZFXXWGTETEPWSINSEGYSVTCNOHTARAMGJFIPXMXHKGGUOABOBEVOBAPB";
	soup3[1] = "HADSBOVAWTDUTQRENOHTARAMAOFVJSSBJOIBRRTOGESDPPRCAEFBTRBUGSUBMCAAZVSSPOEQHNSKDIGJVYFGFIRSTCLOTHESISMUIEXZVYSUREQFIRRETFABBINJUREDSKYBWSEIRUJNIRXL";
	soup3[2] = "SLESERUJNIHLEGEVOBAEXSSXIMVSPOKCTTWURVYSFNRNRREGUJPGAOAIOICEJXYUQHTCPFNZNYABNTFTSRIFIRHEWAAXNCSEEECIVRESTSGBKTFOLAEGSUBOHFPBWMJPBQCBGARASEHTOLCA";
	soup3[3] = "ZHQGANEVOBAHSECIVRESCEESPGFSNSNFROTBZSOTSGUBEORNSISODCYWTXOSYNELTSRIFMPHTCICEBOBATSGTERFZOYELPESRVUFKERTFAAUOUJNOHTARAMBPONPBJKRCCYUZWICSEHTOLCX";
	soup3[4] = "EXEBNUCSKZZICYRTFARETFARISERVZETSXBUVEUNOHTARAMJRHYEKOXFIHSNETHBIQKXFGEISONOQSYECNISULTBTGUJCARPZCBARUPGGSUGJFEVOBAEJPJXAZBRPUXOKONHETFASCLOTEIS";
	//soup3[5] = "";
	//soup3[6] = "";
	//soup3[7] = "";
}