package com.webreadllc.AutoInventory;

import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Michael Hug
 */
@RestController("/api/")
public class WebController {

    @Autowired 
    private AutoRepository autoRepository;
    
    @PostMapping("/api/loremipsum")
    public void addTheGreatfulDead () {
	autoRepository.save(new Auto("ford", "aaa", "white", "11111", 1000));
        autoRepository.save(new Auto("ford", "bbb", "blue", "2222222", 10000));
        autoRepository.save(new Auto("ford", "ccc", "green", "33333", 500));
        autoRepository.save(new Auto("ford", "ddd", "red", "4444444", 5000));
        autoRepository.save(new Auto("ford", "eee", "white", "5555555", 1));
        autoRepository.save(new Auto("ford", "fff", "blue", "66666", 2500));
        autoRepository.save(new Auto("ford", "ggg", "green", "7777777777", 25000));
        autoRepository.save(new Auto("ford", "hhh", "red", "88888888", 999999));
        autoRepository.save(new Auto("chevy", "iii", "white", "999999", 1000));
        autoRepository.save(new Auto("chevy", "jjj", "blue", "0", 10000));
        autoRepository.save(new Auto("chevy", "lll", "green", "12121212", 500));
        autoRepository.save(new Auto("chevy", "mmm", "red", "13131313", 5000));
        autoRepository.save(new Auto("chevy", "nnn", "white", "1414141414", 1));
        autoRepository.save(new Auto("chevy", "ooo", "blue", "15151515", 2500));
        autoRepository.save(new Auto("chevy", "ppp", "green", "1616161616", 25000));
        autoRepository.save(new Auto("chevy", "qqq", "red", "17171717", 999999));
    }
    
    @GetMapping("/api/get/*")
    public Iterable<Auto> getAll() {
	return autoRepository.findAll();
    }
    
    @GetMapping("/api/get/ford")
    public Iterable<Auto> getFord() {
        Set<Auto> ret = new HashSet<>();
	for(Auto i : autoRepository.findAll()) {
            if(i.getMake().equals("ford")) {
                ret.add(i);
            }
        }
        return ret;
    }
    
    @GetMapping("/api/get/chevy")
    public Iterable<Auto> getChevy() {
        Set<Auto> ret = new HashSet<>();
	for(Auto i : autoRepository.findAll()) {
            if(i.getMake().equals("chevy")) {
                ret.add(i);
            }
        }
        return ret;
    }
    
    @GetMapping("/api/get/cheap")
    public Iterable<Auto> getCheap() {
        Set<Auto> ret = new HashSet<>();
	for(Auto i : autoRepository.findAll()) {
            if(i.getPrice() < 5000) {
                ret.add(i);
            }
        }
        return ret;
    }
}
