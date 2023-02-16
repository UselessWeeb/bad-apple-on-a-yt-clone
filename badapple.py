from PIL import Image
import os

FRAME_RATE = 10

#First,make a base directory
if not os.path.exists("base"):
	os.mkdir("base")
	
#Then,make a directory for the frames
if not os.path.exists("frame"):
	os.mkdir("frame")
	
# Convert to PNG sequence
print("Generating PNGs...")
os.system(f"ffmpeg -i bad-apple.mp4 -r {FRAME_RATE} -s 800:600 base/%d.png -y -loglevel error")

#snap every image from base into 12 pieces 
#and save them into frame
print("Generating frames...")
# folder path
dir_path = os.getcwd() + "/base"
count = 0
# Iterate directory
for path in os.listdir(dir_path):
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, path)):
        count += 1
#File count done,now we can start to snap
for i in range(1,count+1):
    with Image.open(f"base/{i}.png") as img:
        #Note that we ignore every 6 pixel in the middle
        #type 1:left 0,top 0,right 190,bottom 160
        #crop type 1
        img1 = img.crop((0,0,170,160))
        img1.save(f"frame/A_{i}.png")
        #in between add a 23x23 pixel which lower than the top one 3 pixels
        imgA=img.crop((0,183,23,206))
        imgA.save(f"frame/A1_{i}.png")
        #type 2:left 0,top 210,right 190,bottom 370/
        img2 = img.crop((0,210,170,370))
        img2.save(f"frame/B_{i}.png")

        imgB=img.crop((0,393,23,416))
        imgB.save(f"frame/B1_{i}.png")
        #type 3:left 0,top 420,right 190,bottom 580
        img3 = img.crop((0,420,170,580))
        img3.save(f"frame/C_{i}.png")

        imgC=img.crop((0,603,23,626))
        imgC.save(f"frame/C1_{i}.png")
        #type 4:left 210,top 0,right 400,bottom 160
        img4 = img.crop((210,0,380,160))
        img4.save(f"frame/D_{i}.png")

        imgD=img.crop((210,183,233,206))
        imgD.save(f"frame/D1_{i}.png")

        #type 5:left 210,top 210,right 400,bottom 370
        img5 = img.crop((210,210,380,370))
        img5.save(f"frame/E_{i}.png")

        imgE=img.crop((210,393,233,416))
        imgE.save(f"frame/E1_{i}.png")
        #type 6:left 210,top 420,right 400,bottom 580
        img6 = img.crop((210,420,380,580))
        img6.save(f"frame/F_{i}.png")

        imgF=img.crop((210,603,233,626))
        imgF.save(f"frame/F1_{i}.png")

        #type 7:left 420,top 0,right 610,bottom 160
        img7 = img.crop((420,0,590,160))
        img7.save(f"frame/G_{i}.png")

        imgG=img.crop((420,183,443,206))
        imgG.save(f"frame/G1_{i}.png")

        #type 8:left 420,top 210,right 610,bottom 370
        img8 = img.crop((420,210,590,370))
        img8.save(f"frame/H_{i}.png")

        imgH=img.crop((420,393,443,416))
        imgH.save(f"frame/H1_{i}.png")

        #type 9:left 420,top 420,right 610,bottom 580
        img9 = img.crop((420,420,590,580))
        img9.save(f"frame/I_{i}.png")

        imgI=img.crop((420,603,443,626))
        imgI.save(f"frame/I1_{i}.png")

        #type 10:left 630,top 0,right 820,bottom 160
        img10 = img.crop((630,0,800,160))
        img10.save(f"frame/J_{i}.png")

        imgJ=img.crop((630,183,653,206))
        imgJ.save(f"frame/J1_{i}.png")

        #type 11:left 630,top 210,right 820,bottom 370
        img11 = img.crop((630,210,800,370))
        img11.save(f"frame/K_{i}.png")

        imgK=img.crop((630,393,653,416))
        imgK.save(f"frame/K1_{i}.png")
        #type 12:left 630,top 420,right 820,bottom 580
        img12 = img.crop((630,420,800,580))
        img12.save(f"frame/L_{i}.png")

        imgL=img.crop((630,603,653,626))
        
        
#afterwards,we can delete the base directory
os.system("rm -rf base")
print("Done!")
