import {tagKeys, createDictionary} from '../tags.js'


// inspired by
// https://exiftool.org/TagNames/EXIF.html
// http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/EXIF.html
// https://metacpan.org/pod/distribution/Image-ExifTool/lib/Image/ExifTool/TagNames.pod#EXIF-Tags
// https://metacpan.org/pod/Image::MetaData::JPEG::TagLists - canonical + custom tags

createDictionary(tagKeys, ['ifd0', 'ifd1'], [
	[0x0100, 'ImageWidth'],
	[0x0101, 'ImageHeight'],
	[0x0102, 'BitsPerSample'],
	[0x0103, 'Compression'],
	[0x0106, 'PhotometricInterpretation'],
	[0x010e, 'ImageDescription'],
	[0x010f, 'Make'],
	[0x0110, 'Model'],
	[0x0111, 'StripOffsets'], // PreviewImageStart
	[0x0112, 'Orientation'],
	[0x0115, 'SamplesPerPixel'],
	[0x0116, 'RowsPerStrip'],
	[0x0117, 'StripByteCounts'], // PreviewImageLength
	[0x011a, 'XResolution'],
	[0x011b, 'YResolution'],
	[0x011c, 'PlanarConfiguration'],
	[0x0128, 'ResolutionUnit'],
	[0x012d, 'TransferFunction'],
	[0x0131, 'Software'],
	[0x0132, 'ModifyDate'],
	[0x013b, 'Artist'],
	[0x013c, 'HostComputer'],
	[0x013d, 'Predictor'],
	[0x013e, 'WhitePoint'],
	[0x013f, 'PrimaryChromaticities'],
	[0x0201, 'ThumbnailOffset'],
	[0x0202, 'ThumbnailLength'],
	[0x0211, 'YCbCrCoefficients'],
	[0x0212, 'YCbCrSubSampling'],
	[0x0213, 'YCbCrPositioning'],
	[0x0214, 'ReferenceBlackWhite'],
	[0x02bc, 'ApplicationNotes'], // [Adobe XMP technote 9-14-02]
	[0x8298, 'Copyright'],
	// not core, but useful
	[0x83bb, 'IPTC'],
	[0x8769, 'ExifIFD'],
	[0x8773, 'ICC'],
	[0x8825, 'GpsIFD'],
	[0x014a, 'SubIFD'], // [Adobe TIFF technote 1]
	[0xa005, 'InteropIFD'], // not actually assigned to IFD0 but offten found here

	// Additional IFD0 TIFF 6.0 tags not in Exif 2.2
	// This is not complete list. This list was taken from https://exiftool.org/TagNames/EXIF.html
	// All of these non-standard tags are here https://metacpan.org/pod/Image::MetaData::JPEG::TagLists#Canonical-Exif-2.2-and-TIFF-6.0-tags-for-IFD0-and-IFD1
	[0x000b, 'ProcessingSoftware'],
	[0x00fe, 'SubfileType'],
	[0x00ff, 'OldSubfileType'],
	[0x0107, 'Thresholding'],
	[0x0108, 'CellWidth'],
	[0x0109, 'CellLength'],
	[0x010a, 'FillOrder'],
	[0x010d, 'DocumentName'],
	[0x0118, 'MinSampleValue'],
	[0x0119, 'MaxSampleValue'],
	[0x011d, 'PageName'],
	[0x011e, 'XPosition'],
	[0x011f, 'YPosition'],
	[0x0122, 'GrayResponseUnit'],
	[0x0129, 'PageNumber'],
	[0x0141, 'HalftoneHints'],
	[0x0142, 'TileWidth'],
	[0x0143, 'TileLength'],
	[0x014c, 'InkSet'],
	[0x0151, 'TargetPrinter'],

	// yet another list
	[0x4746, 'Rating'],
	[0x4749, 'RatingPercent'],
	[0x830e, 'PixelScale'],
	[0x85d8, 'ModelTransform'],
	[0x8649, 'PhotoshopSettings'],
	[0x9c9b, 'XPTitle'],
	[0x9c9c, 'XPComment'],
	[0x9c9d, 'XPAuthor'],
	[0x9c9e, 'XPKeywords'],
	[0x9c9f, 'XPSubject'],
	[0xc612, 'DNGVersion'],
	[0xc613, 'DNGBackwardVersion'],
	[0xc614, 'UniqueCameraModel'],
	[0xc615, 'LocalizedCameraModel'],
	[0xc630, 'DNGLensInfo'],
	[0xc633, 'ShadowScale'],
	[0xc634, 'DNGPrivateData'],
])